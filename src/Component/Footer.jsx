function Footer() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // Months are 0-based, so add 1
  const day = now.getDate();

  return (
    <footer>
      <p>&copy; {year}-{month.toString().padStart(2, '0')}-{day.toString().padStart(2, '0')} My website</p>
    </footer>
  );
}

export default Footer;
