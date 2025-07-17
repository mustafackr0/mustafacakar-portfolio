// File: src/components/Content.tsx
'use client'
import React from 'react'
import styles from '../app/content.module.css'
import { FaExternalLinkAlt } from 'react-icons/fa'

// Proje ve Referans verileri
const projects = [
  {
    name: 'Kriptest',
    subContent: 'Own Project - Full Stack - (active)',
    description: 'Kriptest is an advanced backtesting and signal analysis platform designed for cryptocurrency investors. Users can test their trading strategies based on historical data by selecting various technical indicators (RSI, MACD, Bollinger Bands, etc.). The platform also generates live buy/sell signals with real-time data and sends users push notifications via Telegram..',
    technologies: ['Next.js', 'React', 'Node.js', 'Express', 'MySQL', 'Redis', 'WebSocket', 'Telegram Bot API'],
    url: 'https://kriptest.mustafacakar.com'
  },
  {
    name: 'HistoricalOdyssey',
    subContent: 'Own Project - Mobile Game - (pending)',
    description: 'Historical Odyssey is a match-three puzzle game developed for mobile platforms. It offers users the opportunity to experience an adventure with a new concept at every stage.',
    technologies: ['Unity', 'C#', 'PHP','MySQL', 'Play Console', 'App Store', 'xCode'],
    url: 'https://play.google.com/store/apps/details?id=com.FantasticGames.HistoricalOdyssey&hl=tr'
  },
  {
    name: 'Yats',
    subContent: 'Freelance - Mobile App - (development)',
    description: 'Yatss App is a modern mobile platform designed for seamless yacht chartering. Users can easily search, filter, and book yachts according to their destination, travel dates, and group size. The app features an intuitive reservation system, detailed yacht profiles, photo galleries, real-time availability, and secure payment options, providing a comprehensive end-to-end booking experience for both vacationers and yacht owners..',
    technologies: ['React-Native', 'Expo', 'TypeScript', 'Rest API'],
    url: 'github.com/mustafackr0'
  }
]

const references = [
  { text: 'Mustafa ile çalışmak tam bir zevkti. Projemiz zamanında ve kusursuz teslim edildi.', author: 'Emre Çelebi, Full-Stack Developer', url:'https://www.linkedin.com/in/emrecelebicom/' },
  { text: 'Teknik becerileri ve iletişimi mükemmel. Kesinlikle tekrar çalışmayı isteriz.', author: 'Arda Pulat, Computer Eng.', url:'https://www.linkedin.com/in/arda-pulat/' },
]

export default function Content() {
  return (
    <div className={styles.mainContainer}>
      <div style={{display:"flex", flexDirection:"column", alignItems:"center", backgroundColor:"rgb(34 34 34)", padding:"2rem", borderRadius:"8px"}}>
        <h2 className={styles.tittle}>Projects & Experiences</h2>
        <div className={styles.projectsWrapper}>
            <div className={styles.cardGrid}>
                {projects.map((project, idx) => (
                <div key={idx} className={styles.card}>
                    <h3 className={styles.cardTitle}>{project.name}</h3>
                    <p className={styles.subTittle}>{project.subContent}</p> 
                    <p className={styles.cardDescription}>{project.description}</p>
                    <ul className={styles.techList}>
                    {project.technologies.map((tech, i) => (
                        <li key={i} className={styles.techBadge}>{tech}</li>
                    ))}
                    </ul>
                    {/* <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                    Show <FaExternalLinkAlt className={styles.linkIcon} />
                    </a> */}
                </div>
                ))}
            </div>
        </div>
      </div>

      <div style={{display:"flex", flexDirection:"column", alignItems:"center", backgroundColor:"rgb(34 34 34)", padding:"2rem", borderRadius:"8px"}}>
        <h2 className={styles.tittle}>Referances</h2>
        <div className={styles.referenceWrapper}>
            <div className={styles.referenceGrid}>
                {references.map((ref, idx) => (
                <blockquote key={idx} className={styles.referenceBlockquote}>
                    <p className={styles.referenceText}>{ref.text}</p>
                    <cite className={styles.referenceAuthor}>— {ref.author}</cite>
                    <a href={ref.url} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                    Show <FaExternalLinkAlt className={styles.linkIcon} />
                    </a>
                </blockquote>
                ))}
            </div>
        </div>
      </div>

    </div>
  )
}
