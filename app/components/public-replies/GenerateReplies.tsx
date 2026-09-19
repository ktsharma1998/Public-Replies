import "./GenerateReplies.css";

import { GenerateRepliesIcon } from "../../assets/icons/GenerateRepliesIcon";
import { InfoIcon } from "../../assets/icons/InfoIcon";
import { SparkleIcon } from "../../assets/icons/SparkleIcon";

export function GenerateReplies() {
  return (
    <section className="generate-replies">
      <GenerateRepliesIcon />

      <button
        type="button"
        className="generate-replies__button"
      >
        Generate 3 Public Replies
      </button>

      <div className="generate-replies__credits">
        <SparkleIcon />

        <span className="generate-replies__credits-number">
          250
        </span>
      </div>

      <button
        type="button"
        className="generate-replies__info-button"
        aria-label="Information about public reply generation"
      >
        <InfoIcon />
      </button>
    </section>
  );
}