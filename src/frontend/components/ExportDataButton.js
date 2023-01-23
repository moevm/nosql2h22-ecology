import "./styles.css";
import ExportData from "./ExportData";
export default function ExportDataButton() {


    function getDataFromLocalStorage(){
        if (localStorage.getItem("data") === null) {
            return []
        }
        const localData = localStorage.getItem("data")
        return localData
    }

    const downloadTxtFile = () => {
        let data;
        data = getDataFromLocalStorage()
        let fileData = data
        const file = new Blob([fileData], {
            type: "text/plain;charset=utf-8}"
        });
        const url = URL.createObjectURL(file);
        const element = document.createElement("a");
        element.href = url
        element.download = "data.json"
        element.click();
    };

    return (
        <div className="export-button">
            <input id="input"/>
            <button onClick={downloadTxtFile}>Export Data </button>
            />
        </div>
    );
}
