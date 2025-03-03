const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <a
          href="https://x.com/HavenCryptoNet"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 flex items-center gap-2 hover:text-purple-500 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            // class="bi bi-twitter-x"
            viewBox="0 0 16 16"
          >
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
          </svg>
          Follow us on X
        </a>
      </div>
    </footer>
  );
};

export default Footer;
