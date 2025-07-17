// File: src/app/page.tsx
'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiOutlineClose } from 'react-icons/ai'
import { createPortal } from 'react-dom'
import Content from '../components/Content'

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Mobil kullanıcılar için doğrudan yeni sekmede PDF açma
  const handleResumeClick = () => {
    if (mounted && window.innerWidth <= 768) {
      window.open('/MustafaÇakar.pdf', '_blank')
    } else {
      setModalOpen(true)
    }
  }

  return (
    <main className={styles.container}>
      {/* Hero */}
      <div className={styles.header}>
        <Image
          src="/images/avatar.png"
          alt="Mustafa Çakar"
          width={400}
          height={400}
          className={styles.avatar}
        />
        <div className={styles.tittleContainer}>
          <h1 className={styles.tittle}>Mustafa Çakar</h1>
          <p>
            <span className={styles.subTittle}>
              Software Engineer - Full Stack & Game Developer.
            </span>
            <br />
            I Develop Backend, Games, Websites and Mobile Applications.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://www.linkedin.com/in/mustafacakar0/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin size={40} />
            </a>
            <a href="https://github.com/mustafackr0" target="_blank" rel="noopener noreferrer">
              <AiFillGithub size={40} />
            </a>
            <a href="https://instagram.com/mustfackr1" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram size={40} />
            </a>
          </div>
          <button onClick={handleResumeClick} className={styles.resumeButton}>
            Özgeçmişi Görüntüle
          </button>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <Content />
      </div>

      {mounted && isModalOpen && createPortal(
        <div className={styles.modalOverlay} onClick={() => setModalOpen(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setModalOpen(false)}>
              <AiOutlineClose size={24} />
            </button>
            {/* PDF embed; ascii-safe isimlendirilmiş resume.pdf */}
            <iframe
              src="/MustafaÇakar.pdf"
              style={{ width: '100%', height: '100%', border: 'none' }}
              title="Özgeçmiş"
            />
            <div style={{ position: 'absolute', bottom: '2rem', width: '100%', textAlign: 'center' }}>
              <a href="/MustafaÇakar.pdf" download className={styles.resumeButton}>
                İndir
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </main>
  )
}
