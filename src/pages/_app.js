export default function App({ Component, pageProps }) {
  const text = "Brokkoli";
  return <Component {...pageProps} brokkoli={text} />;
}
