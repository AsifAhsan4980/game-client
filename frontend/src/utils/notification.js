import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()


export const notify = (msg) => {
    toast(`${msg}`)
}