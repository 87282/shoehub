import { loadStripe } from "@stripe/stripe-js";
import { motion } from "framer-motion";
import { getSession, signIn } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-toastify";
import { CartCheckout } from "../components/CartPage/CartCheckout";
import { CartItems } from "../components/CartPage/CartItems";
import { Header } from "../components/Header";
import { ProfileFooter } from "../components/Profile/ProfileFooter";
import { Sidebar } from "../components/Sidebar";
import { useCart } from "../hooks/useCart";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function Cart() {
  const {
    handleSetIsCartOpen,
    isCartOpen,
    cart,
    handleRemoveProduct,
    handleUpdateAmount,
    clearCart,
  } = useCart();
  const [loading, setLoading] = useState(false);
  const cartSum = cart.reduce((previous, current) => {
    previous += (current.price / 100 / 12) * current.amount; 
    return previous;
  }, 0);

  const handleCartCheckout = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    const session = await getSession();

    if (cart.length < 1) {
      toast.info(
        "O ietms in je winkelmand"
      );
      setLoading(false);
      return
    }

    if (!session) {
      toast.warning("U moet ingelogd zijn om af te rekenen");
      signIn("google");
      return;
    }

    if (cart.length > 30) {
      toast.error(
        "Veel items in de winkelwagen, verwijder enkele om de aankoop te voltooien"
      );
      setLoading(false);
      return;
    }

    try {
      // GET CART PRODUCTS
      const cartProducts = cart.map((product) => {
        return {
          cartProductId: product.id,
          cartAmount: product.amount,
          cartPrice: product,
        };
      });

      // PRODUCT CHECKOUT
      const { sessionId } = await fetch("/api/checkout/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cartProducts,
          session: session,
        }),
      }).then((res) => res.json());

      
      //REDIRECT TO CHECKOUT
      const stripe = await stripePromise;
      const { error } = await stripe!.redirectToCheckout({ sessionId });

      // CLEAR CART AFTER CHECKOUT SUCCESSFUL
      clearCart();
      setLoading(false);
    } catch (err) {
      toast.error("Error");
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="md:container-div">
        <Header />
        <Sidebar />
        <div className="lg:main-container-div max-w-[1120px] lg:px-7 mx-auto min-h-[78vh]">
          <motion.main className="px-4 w-full mx-auto mt-[8rem] md:grid md:grid-cols-cart md:gap-10 md:items-start lg:mt-16">
            <CartItems cart={cart} handleRemoveProduct={handleRemoveProduct} handleUpdateAmount={handleUpdateAmount}/>
            <CartCheckout cartSum={cartSum} handleCartCheckout={handleCartCheckout} loading={loading}/>
          </motion.main>
        </div>
      </div>
      <ProfileFooter />
    </>
  );
}
