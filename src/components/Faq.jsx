import { useState } from "react";
import "./Faq.css";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(0); // Default membuka item pertama

  const faqData = [
    {
      question: "Apa itu Tiravana?",
      answer: "Tiravana adalah platform e-commerce yang menjual produk-produk unik dan berkualitas tinggi yang terbuat dari plastik daur ulang, berkomitmen untuk kelestarian lingkungan dan keberlanjutan."
    },
    {
      question: "Bagaimana proses daur ulang plastik dilakukan?",
      answer: "Proses kami meliputi pengumpulan limbah dari komunitas lokal, sortasi berdasarkan jenis, pencacahan menjadi flakes, pembersihan, hingga akhirnya dicetak menjadi produk baru."
    },
    {
      question: "Apakah produk Tiravana ramah lingkungan?",
      answer: "Tentu. Setiap produk kami menggunakan 100% material hasil daur ulang dan proses produksinya dirancang untuk meminimalkan jejak karbon."
    },
    {
      question: "Apakah ada garansi untuk produk yang dibeli?",
      answer: "Kami memberikan jaminan kualitas untuk setiap produk. Jika terdapat cacat produksi, Anda dapat menghubungi tim kami untuk proses penggantian."
    },
    {
      question: "Bagaimana cara menjadi mitra UMKM Tiravana?",
      answer: "Anda dapat menghubungi kami melalui detail kontak yang tersedia untuk mendiskusikan peluang kolaborasi sebagai mitra pengumpul limbah atau distributor."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-main-title">Pertanyaan yang Sering Diajukan</h2>
      
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <button className="faq-question" onClick={() => toggleAccordion(index)}>
              <span>{item.question}</span>
              {activeIndex === index ? <HiChevronUp /> : <HiChevronDown />}
            </button>
            
            <div className="faq-answer-wrapper">
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;