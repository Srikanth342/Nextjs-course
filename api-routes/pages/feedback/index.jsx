import { buildFeedbackPath, extractFeedback } from "../api/feedback";

const { Fragment, useState } = require("react");

const FeedbackPage = (props) => {
  const { feedbackItems } = props;
  const [selectedItem, setSelectedItem] = useState({});

  const handleGetDetails = (id) => {
    fetch(`/api/${id}`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => setSelectedItem(data.feedback));
  };
  return (
    <Fragment>
      <p>{selectedItem.email}</p>
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}{" "}
            <button onClick={() => handleGetDetails(item.id)}>
              show details
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
    revalidate: 60,
  };
}
export default FeedbackPage;
