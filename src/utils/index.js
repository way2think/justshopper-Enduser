const scrollToTop = () => {
  // Scroll to the top of the page
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optional: Smooth scrolling animation
  });
};

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const options = {
    year: "numeric",
    day: "numeric",
    month: "long",
  };
  return date.toLocaleDateString("en-US", options);
};

const formatAmount = (amount) => {
  return amount.toFixed(2);
};

function formatAddress(address) {
  return (
    address.line +
    ", " +
    address.city +
    ", " +
    address.state +
    ", " +
    address.country +
    " - " +
    address.pincode
  );
}

export { scrollToTop, formatDate, formatAmount, formatAddress };
