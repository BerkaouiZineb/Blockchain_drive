import { useState } from "react";
import "./Display.css";

// Fonction pour détecter le type de fichier depuis l'URL
const getFileType = (url) => {
  const extension = url.split(".").pop().split("?")[0].toLowerCase();
  if (["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(extension)) return "image";
  if (["mp4", "webm", "ogg"].includes(extension)) return "video";
  if (["mp3", "wav"].includes(extension)) return "audio";
  if (extension === "pdf") return "pdf";
  return "other";
};

// Composant pour afficher un fichier selon son type
const FilePreview = ({ url, index }) => {
  const type = getFileType(url);
  const fileName = url.split("/").pop() || `Fichier ${index + 1}`;

  if (type === "image") {
    return (
      <a href={url} key={index} target="_blank" rel="noreferrer">
        <img src={url} alt={`fichier-${index}`} className="image-list" />
      </a>
    );
  }

  if (type === "video") {
    return (
      <div key={index} className="file-item">
        <video controls width="250">
          <source src={url} />
          Votre navigateur ne supporte pas la vidéo.
        </video>
      </div>
    );
  }

  if (type === "audio") {
    return (
      <div key={index} className="file-item">
        <p>🎵 {fileName}</p>
        <audio controls>
          <source src={url} />
        </audio>
      </div>
    );
  }

  if (type === "pdf") {
    return (
      <div key={index} className="file-item">
        <a href={url} target="_blank" rel="noreferrer">
          📄 {fileName}
        </a>
      </div>
    );
  }

  // Autres fichiers (zip, docx, etc.)
  return (
    <div key={index} className="file-item">
      <a href={url} target="_blank" rel="noreferrer">
        📁 {fileName}
      </a>
    </div>
  );
};

const Display = ({ contract, account }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    if (!contract || !account) {
      alert("Wallet non connecté");
      return;
    }

    try {
      const dataArray = await contract.display(account);

      if (!dataArray || dataArray.length === 0) {
        alert("Aucun fichier à afficher");
        setData([]);
        return;
      }

      const files = dataArray.map((item, index) => (
        <FilePreview url={item} index={index} key={index} />
      ));

      setData(files);
    } catch (error) {
      console.error(error);
      alert("Vous n'avez pas accès ou une erreur s'est produite");
    }
  };

  return (
    <>
      <div className="image-list">{data}</div>
      <button className="center button" onClick={getData}>
        Afficher mes fichiers
      </button>
    </>
  );
};

export default Display;