import { useEffect, type RefObject } from "react";

type tcallbackEvent = Event | MouseEvent;
type tuseOutsideClickProps = {
    /**
     * Reference of the object that is not considered outside
     * for example in case of popup it should be popup container itself
     */
    ref: RefObject<HTMLElement | null>,
    callback: (event: tcallbackEvent) => void,
    /** 
     * active  is not compulsory but must be provided inorder for this hook to activate 
     * @defaults false
     */
    active?: boolean,
}

const useOutsideClick = (props: tuseOutsideClickProps) => {
    const {
        ref,
        callback,
        active = false,
    } = props;

    const onOutsideClick = (e: tcallbackEvent) => {
        let isInside = false;
        const containerElement = ref.current;
        if (!containerElement) {
            console.error("Falied to get the container from the ref");
            return;
        }

        const currentTargetElement = e.target as Node;
        if (!currentTargetElement) {
            console.error("Failed to get the current target that was clicked");
            return;
        }

        isInside = ref.current?.contains(currentTargetElement) || false;
        if (!isInside) callback(e);
    };

    const removeEventListeners = () => {
        document.removeEventListener("touch", onOutsideClick);
        document.removeEventListener("click", onOutsideClick);
    }

    useEffect(() => {
        if (active) {
            document.addEventListener("touch", onOutsideClick);
            document.addEventListener("click", onOutsideClick);
        }

        return () => {
            removeEventListeners();
        }
    }, [active, removeEventListeners, onOutsideClick])

}

export default useOutsideClick;
