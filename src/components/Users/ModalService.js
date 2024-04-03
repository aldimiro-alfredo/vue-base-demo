import { Modal } from "bootstrap";


export default {


    showModal(idModal) {

        return new Modal(document.getElementById(idModal), { keyboard: false });
    }

}