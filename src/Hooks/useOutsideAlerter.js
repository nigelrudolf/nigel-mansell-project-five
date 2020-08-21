// References
// https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
// https://medium.com/@pitipatdop/little-neat-trick-to-capture-click-outside-with-react-hook-ba77c37c7e82
// https://www.youtube.com/watch?v=eWO1b6EoCnQ
import { useEffect } from 'react';

function useOutsideAlerter(ref, callback) {

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [callback, ref]);
}

export default useOutsideAlerter;