import { useState } from "react";

import "./ReplyLimit.css";

const replyLimits = [50, 200, 400, 800];

export function ReplyLimit() {
    const [selectedLimit, setSelectedLimit] = useState(400);

    return (
        <section className="reply-limit">
            <div className="reply-limit__description">
                <div className="reply-limit__title">
                    Limit public replies
                </div>

                <div className="reply-limit__hint">
                    Some comments are skipped automatically to avoid spam detection
                </div>
            </div>

            <div className="reply-limit__selector">
                <div className="reply-limit__options">
                    {replyLimits.map((limit) => (
                        <button
                            key={limit}
                            type="button"
                            className={`reply-limit__option ${selectedLimit === limit
                                    ? "reply-limit__option--selected"
                                    : ""
                                }`}
                            onClick={() => setSelectedLimit(limit)}
                        >
                            {selectedLimit === limit && (
                                <span className="reply-limit__selected-bg" />
                            )}

                            <span className="reply-limit__option-text">
                                {limit}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}