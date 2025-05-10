import { useEffect, useState } from "react";

const MessageBar = () => {
  const [message, setMessage] = useState([null]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://u6dwgkszzd.ap-south-1.awsapprunner.com/v1/public/message-bar"
    );
    const json = await data.json();
    // console.log(json?.data[0]?.promo);

    setMessage(json?.data[0]?.promo);
  };

  // if (message.length === 0) {
  //   return <div className="bg-black h-12 w-full"></div>;
  // }

  return message.length === 0 ? (
    <div className="bg-black h-12 w-full"></div>
  ) : (
    <div className="border h-7 flex items-center overflow-hidden whitespace-nowrap w-full bg-black">
      <div className="marquee">
        {/* {message.map((item, index) => (
        <span
          key={index}
          className="m-2 p-1"
          dangerouslySetInnerHTML={{ __html: item }}
        />
      ))} */}

        {/* This will fill the text 5 times so that no blank space appears while animating the texts linearly */}
        {Array(3)
          .fill(0)
          .map((_, index) =>
            message.map((item, index) => (
              <span
                key={index}
                className="m-2 p-1"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))
          )}
      </div>
    </div>
  );
};

export default MessageBar;
