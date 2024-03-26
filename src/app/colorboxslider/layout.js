export default function ColorBoxLayout({ children, left, right }) {
  const issidebar = false;
  return (
    <section>
      {children}
      {/* {left}
      {right} */}
      {issidebar ? left : right}  {/* built here protected routing like if user not login...*/ }
    </section>
  );
}
