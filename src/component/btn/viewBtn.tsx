'use client';

export default function ScrollButton() {

  const handleScroll = () => {
    document
      .getElementById('footer-section')
      ?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
  };

  return (
    <button
      onClick={handleScroll}
      className=""
    >
    সব পণ্য দেখুন
    </button>
  );
}






 