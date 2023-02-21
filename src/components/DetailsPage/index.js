import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faEnvelope,
    faPhone,
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import "./DetailsPage.css";

export default function DetailsPage() {
    return (
        <main className="detailsPageContent">
            <h2 className="title">Details</h2>
            <div className="iconSection">
                <FontAwesomeIcon className="icon" icon={faUser} />
                <FontAwesomeIcon className="icon" icon={faEnvelope} />
                <FontAwesomeIcon className="icon" icon={faPhone} />
                <FontAwesomeIcon className="icon" icon={faLocationDot} />
            </div>
        </main>
    );
}
