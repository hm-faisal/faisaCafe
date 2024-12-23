import Marquee from "react-fast-marquee";

const CustomerReview = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      profile:
        "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      comment: "This product is amazing! Highly recommend it to anyone.",
      date: "2024-12-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 4,
      profile:
        "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      comment:
        "Great value for the price, but it could be improved in some areas.",
      date: "2024-12-10",
    },
    {
      id: 3,
      name: "Alex Johnson",
      rating: 3,
      profile:
        "https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg",
      comment: "It’s okay, but not what I expected.",
      date: "2024-12-05",
    },
  ];

  return (
    <div className=" mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full">
      <h2 className="text-2xl font-bold text-gray-800">Customer Reviews</h2>
      <div className="mt-6 space-y-6">
        <Marquee className="">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-6 bg-white rounded-lg mr-4 shadow-lg border border-gray-200"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img src={review.profile} className="w-16 h-16 rounded-md" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>

              <div className="mt-3">
                <p className="text-gray-700">{review.comment}</p>
              </div>

              <div className="mt-4 flex items-center">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15l3.09 1.82-1.18-3.72L16 9.09l-3.75-.27L10 5 7.75 8.82 4 9.09l3.09 4.01-1.18 3.72L10 15z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default CustomerReview;
