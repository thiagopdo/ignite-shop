import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import {
  ImageSuccessContainer,
  SuccessContainer,
} from "../styles/pages/success";
import Head from "next/head";

interface SuccessProps {
  customerName: string;
  productName: {
    name: string;
    imageUrl: string;
  };
}

export default function Success({ customerName, productName }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compro efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <SuccessContainer>
        <h1>Compra Efetuada!</h1>

        <ImageSuccessContainer>
          <Image src={productName.imageUrl} width={120} height={120} alt="" />
        </ImageSuccessContainer>

        <p>
          Uhuul,<strong>{customerName}</strong>, sua{" "}
          <strong>{productName.name}</strong> camiseta foi enviada e chegará em
          breve!
        </p>

        <Link href="">Voltar ao catalogo</Link>
      </SuccessContainer>
    </>
  );
}

export async function getServerSideProps({ query }) {
  // code

  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details.name;
  const productName = session.line_items.data[0].price
    .product as Stripe.Product;

  return {
    props: {
      customerName,
      productName: {
        name: productName.name,
        imageUrl: productName.images[0],
      },
    },
  };
}
