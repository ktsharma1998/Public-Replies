import "./ReplySettings.css";

import { PlusIcon } from "../../assets/icons/PlusIcon";

export function ReplySettings() {
  return (
    <section className="reply-settings">
      <div className="reply-settings__title">
        Publicly reply to comments
      </div>

      <div className="reply-settings__replies">
        <div className="reply-settings__description">
          <div className="reply-settings__replies-title">
            Replies
          </div>

          <div className="reply-settings__replies-hint">
            A variant will be selected at random to avoid repetition.
          </div>
        </div>

        <div className="reply-editor">
          <textarea
            className="reply-editor__textarea"
            defaultValue="If you’re still curious, don’t forget to tap the link"
            aria-label="Public reply"
          />

          <div className="reply-editor__link-wrapper">
            <div className="reply-editor__link-container">
              <div className="reply-editor__link-row">
                <button
                  type="button"
                  className="reply-editor__add-link"
                >
                  <span className="reply-editor__add-link-content">
                    <PlusIcon />

                    <span className="reply-editor__add-link-text">
                      Add Link
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}