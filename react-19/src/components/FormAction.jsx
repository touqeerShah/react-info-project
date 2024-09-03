import { useActionState, useOptimistic } from 'react';
import { updateNameInDB } from '../utils/api';
import { useFormStatus } from "react-dom"

function Forms() {
    // console.log(localStorage.getItem("formData"))
    const [formData, actionFunction, isPending] = useActionState(
        formAction,
        {
            error: null,
            name: JSON.parse(localStorage.getItem("name")) || "Anonymous user"
        }

    )
    const [optimisticName, setOptimisticName] = useOptimistic(formData.name)


    async function formAction(prevState, formData) {
        try {
            setOptimisticName(formData.get("name"))
            const newName = await updateNameInDB(formData.get("name"))
            return {
                error: null,
                name: newName
            }
        } catch (error) {
            console.error(error.message)
            return {
                ...prevState,
                error: error.message,
            }
        }
    }




    return (
        <>
            <p className="username">
                Current user: <span>{optimisticName}</span>
            </p>
            {isPending && <p>Loading .. . .</p>}
            {!isPending && formData.error && <p>{formData.error}</p>}

            <form action={actionFunction}>
                <input
                    type="text"
                    name="name"
                    required
                />
                <MyButton type="submit">Update</MyButton>
            </form>
        </>
    );
}


function MyButton({ children, ...rest }) {
    const { pending } = useFormStatus()
    return (
        <button {...rest}>{pending ? "Submitting..." : children}</button>
    )
}

export default Forms;
