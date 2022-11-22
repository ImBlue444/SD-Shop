import Head from 'next/head';
import CardSection from "../components/CardSection";
import MacroCard from '../components/Macrocard';

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data = await res.json();
  return {
    props: { products: data },
  };
};



export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Sempre Domenica</title>
        <meta name="SempreDomenica" content="Digital embroidery OnLine Shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MacroCard />
      <CardSection data={products} />

    </div>
  )
}
