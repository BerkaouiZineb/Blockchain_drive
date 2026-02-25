import { useState } from "react";
import axios from "axios";
import "./FileUpload.css";
import { API_Key, API_Secret } from "../utils/constants";

const FileUpload = ({ contract, account, provider }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No file selected");
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        setUploading(true);
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: API_Key,
            pinata_secret_api_key: API_Secret,
            "Content-Type": "multipart/form-data",
          },
        });

        // Utilisation d'un gateway public plus fiable
        const fileHash = `https://ipfs.io/ipfs/${resFile.data.IpfsHash}`;
        await contract.add(account, fileHash);

        alert("Fichier uploadé avec succès !");
        setFileName("No file selected");
        setFile(null);
      } catch (e) {
      console.error("Erreur complète :", e);
      console.error("Réponse Pinata :", e.response?.data);
  alert("Erreur lors de l'upload vers Pinata");
      } finally {
        setUploading(false);
      }
    }
  };

  const retrieveFile = (e) => {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFileName(e.target.files[0].name);
    e.preventDefault();
  };

  return (
    <div className="top">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="file-upload" className="choose">
          Choisir un fichier
        </label>
        {/* accept="*" permet tous les types de fichiers */}
        <input
          disabled={!account}
          type="file"
          id="file-upload"
          name="data"
          accept="*"
          onChange={retrieveFile}
        />
        <span className="textArea">Fichier : {fileName}</span>
        <button type="submit" className="upload" disabled={!file || uploading}>
          {uploading ? "Upload en cours..." : "Upload File"}
        </button>
      </form>
    </div>
  );
};

export default FileUpload;