const ToastConfig = {
    getToastConfig: function () {
        return {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        }
    },
    getErrorToastConfig: function () {
        return {
            position: "top-center",
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        }
    }
}

export default ToastConfig;
