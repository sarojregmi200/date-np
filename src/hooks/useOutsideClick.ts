import type { RefObject } from "react";

type tuseOutsideClickProps = {
    /**
     * Reference of the object that is not considered outside
     * for example in case of popup it should be popup container itself
     */
    ref: RefObject<HTMLElement>,
    callback: () => void,
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

}

export default useOutsideClick;

