
import React, { PropTypes } from 'react'
import styles from './styles.css'

export default function Section({ title, text, children, contentClassName }) {
  const renderText = () => (
    <p className={styles.text}>
      {text}
    </p>
  )

  const renderContent = () => (
    <ul className={`${styles.content} ${contentClassName}`}>
      {children}
    </ul>
  )

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>
        <span className={styles.highlight}>{title}</span>
      </h2>
      {text && renderText()}
      {children && renderContent()}
    </div>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
  contentClassName: PropTypes.string
}
