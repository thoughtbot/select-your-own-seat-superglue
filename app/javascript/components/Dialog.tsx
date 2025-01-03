import React, { PropsWithChildren, useEffect, useRef } from 'react'

export const Dialog = ({open, children}: PropsWithChildren<{open?: boolean}>) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [open]);

  return (
    <dialog className='syos-dialog' ref={ref} onClose={() => history.back()}>
      {children}
    </dialog>
  )
}