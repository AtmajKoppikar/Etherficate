import { useState, useEffect } from 'react';
import { NFTStorage, File } from 'nft.storage'
import { Buffer } from 'buffer';
import { ethers } from 'ethers';
// import axios from 'axios';

// Components
import Spinner from 'react-bootstrap/Spinner';
import Navigation from '../Components/Navigation';


// ABIs
import NFT from '../abis/NFT.json'

// Config
import config from '../config.json';

function CertificatePage() {
    const [provider, setProvider] = useState(null)
    const [account, setAccount] = useState(null)
    const [nft, setNFT] = useState(null)

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState(null)
    const [url, setURL] = useState(null)

    const [message, setMessage] = useState("")
    const [isWaiting, setIsWaiting] = useState(false)

    const loadBlockchainData = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        setProvider(provider)

        const network = await provider.getNetwork()

        const nft = new ethers.Contract(config[network.chainId].nft.address, NFT, provider)
        setNFT(nft)
        console.log("nft", nft);
    }

    const submitHandler = async (e) => {
        e.preventDefault()

        if (name === "" || description === "") {
            window.alert("Please provide a name and description")
            return
        }

        setIsWaiting(true)

        // Call AI API to generate a image based on description
        const imageData = await createImage()
        console.log("CreateImage function done");
        // Upload image to IPFS (NFT.Storage)
        const url = await uploadImage(imageData)
        console.log(url);

        // Mint NFT
        // await mintImage(url)

        setIsWaiting(false)
        setMessage("")
    }

    const createImage = async () => {
        setMessage("Generating Image...")

        const canvas = document.createElement('canvas');
        console.log("Canvas created");

        const cert = new Image();

        console.log("Image created in canvas");

        const ctx = canvas.getContext('2d');
        console.log("Till here");
        console.log(cert);
        try {
            cert.onload = (onerror) => {
                console.log("Entered onload");
                ctx.drawImage(cert, 0, 0, canvas.width, canvas.height);
                ctx.font = 'bold 30px Arial';
                ctx.fillStyle = 'black';
                ctx.textAlign = 'center';
                ctx.fillText(name, 630, 430);
                ctx.fillText('0x14dC79964da2C08b23698B3D3cc7Ca32193d9955', 930, 515);
                ctx.fillText('Mid Journey Prompting', 970, 660);
                ctx.fillText('Sakshi Surve ', 970, 800);
                ctx.fillStyle = 'white';
                ctx.fillText('6969', 85, 1105);
                console.log("NFT done");
                const base64data = canvas.toDataURL('image/png').replace(/^data:image\/png;base64,/, '');
                console.log('Base64 data:', base64data);
                console.log('Canvas:', canvas);
                const img = `data:image/png;base64,${base64data}`;
                setImage(img);
                setMessage("");
            };
            cert.src = 'Certificate_template.png';
            canvas.width = cert.width;
            canvas.height = cert.height;
        } catch (err) {
            console.log('Error: ', err);
            setMessage("Error generating image")
        }

        const data = canvas.data;
        console.log("Generated");
        return data
    }




    const uploadImage = async (imageData) => {
        setMessage("Uploading Image...")

        // Create instance to NFT.Storage
        const nftstorage = new NFTStorage({ token: process.env.REACT_APP_NFT_STORAGE_API_KEY })

        // Send request to store image
        const { ipnft } = await nftstorage.store({
            image: new File([imageData], "image.png", { type: "image/png" }),
            name: name,
            description: description,
        })

        // Save the URL
        const url = `https://ipfs.io/ipfs/${ipnft}/metadata.json`
        console.log(url)
        setURL(url)

        return url
    }

    const mintImage = async (tokenURI) => {
        setMessage("Waiting for Mint...")

        const signer = await provider.getSigner()
        const transaction = await nft.connect(signer).mint(tokenURI, { value: ethers.utils.parseUnits("1", "ether") })
        await transaction.wait()
    }

    useEffect(() => {
        loadBlockchainData()
    }, [])

    return (
        <div>
            <Navigation account={account} setAccount={setAccount} />

            <div className='form'>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Create a name..." onChange={(e) => { setName(e.target.value) }} />
                    <input type="text" placeholder="Create a description..." onChange={(e) => setDescription(e.target.value)} />
                    <input type="submit" value="Create & Mint" />
                </form>

                <div className="image">
                    {!isWaiting && image ? (
                        <img src={image} alt="NFT certificate" />
                    ) : isWaiting ? (
                        <div className="image__placeholder">
                            <Spinner animation="border" />
                            <p>{message}</p>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>

            {!isWaiting && url && (
                <p className="metadata">
                    View&nbsp;<a href={url} target="_blank" rel="noreferrer">Metadata</a>
                </p>
            )}
        </div>
    );
}

export default CertificatePage;