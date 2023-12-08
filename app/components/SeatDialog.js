import React from 'react'
import Dialog from './Dialog'

export default class extends React.Component {
  render () {
    const {
      sectionName,
      rowNumber,
      price,
    } = this.props

    return (
      <Dialog>
        <header className="syos-dialog__header">
          <h2 className="syos-dialog__title">
            Confirm seat selection
          </h2>

          <form method="dialog">
            <button
              className="syos-button syos-button--transparent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="syos-icon syos-icon--large"
                title="Close modal"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            </button>
          </form>
        </header>
        <section className="syos-dialog__body">
          <dl className="syos-grid syos-grid--2">
            <div>
              <dt>
                Section
              </dt>

              <dd className="syos-u-font-size-large">
                { sectionName }
              </dd>
            </div>

            <div>
              <dt>
                Seat
              </dt>

              <dd className="syos-u-font-size-large">
                { rowNumber }
              </dd>
            </div>
          </dl>
        </section>
        <footer className="syos-dialog__footer syos-block-stack syos-block-stack--bordered syos-block-stack--large">
          <div className="syos-inline-stack syos-inline-stack--inline syos-block-stack__item">
            <div className="syos-inline-stack__item">
              <p className="syos-u-margin-bottom-0">
                { sectionName }
              </p>
            </div>

            <div className="syos-inline-stack__item syos-inline-stack__item--push-start">
              <p className="syos-u-margin-bottom-0">
                <strong> { price } </strong>
              </p>
            </div>

            <div className="syos-inline-stack__item">
              <button
                className="syos-button"
              >
                Select
              </button>
            </div>
          </div>
        </footer>
      </Dialog>
    )
  }
}

