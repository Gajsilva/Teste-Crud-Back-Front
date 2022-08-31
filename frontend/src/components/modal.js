

import './modal.css'

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    

    return(
        <div className={showHideClassName}>
        <section className="modal-main">
            {children}
            
            <form action="" id='modal'>
               <button type="button" onClick={handleClose}>
            Fechar
            </button >
            <input 
                type="text"
                name="nome"
                placeholder="Nome do Material"
            />
            <input 
                type="text"
                name="Material"
                placeholder="Quantidade"
            />
            <button type= "submit">Enviar</button>
        </form>
        </section>
        </div>
    )
    
}


export default Modal;