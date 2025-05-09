import { Rate, Input, Button, Avatar } from "antd";
import { useState } from "react";

const { TextArea } = Input;

const ProductReviewSection = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handlePostReview = () => {
    console.log("Rating:", rating);
    console.log("Comment:", comment);
    // Implement review submission logic here
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 !pb-10">
      {/* Left: Leave a Review */}
      <div className="!space-y-3">
        <h2 className="text-xl font-bold text-[#0B1742]">Leave a Review:</h2>
        <p className="text-gray-500 mb-3">
          Please write review after purchase product.
        </p>
        <Rate disabled onChange={setRating} value={rating} className="mb-3 text-2xl" />
        <TextArea
          rows={4}
          placeholder="Write your comment here."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="mb-4"
          disabled
        />
        <Button
          type="primary"
          style={{ backgroundColor: "#ff6a0071", borderColor: "#ff6a0071" }}
          onClick={handlePostReview}
        >
          Post Review
        </Button>
      </div>

      {/* Right: Reviews */}
      <div className="!space-y-3">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold text-[#0B1742] mb-4">Reviews</h2>

          <div className="flex items-center justify-between mb-2">
            <Rate disabled defaultValue={5} />
            <span className="text-gray-500 text-sm !pl-2">(1)</span>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex items-start gap-3 mb-2">
            <Avatar src="https://randomuser.me/api/portraits/men/32.jpg" />
            <div>
              <p className="font-semibold text-[#0B1742]">Rafiul Hasan</p>
              <p className="text-xs text-gray-500 mb-1">30 Dec, 2024</p>
            </div>
          </div>

          <Rate disabled defaultValue={4} className="mb-2" />
        </div>
        <p className="text-sm">
          <span className="font-semibold">Review On:</span> Glass Display
          Cabinet
        </p>
        <p className="text-gray-700 text-sm">
          The sleek and stylish glass display cabinet is a fantastic addition to
          any modern home. Its minimalist design ensures it blends effortlessly
          into living rooms, dining spaces, or even home offices, making it a
          versatile piece of furniture.
        </p>
      </div>
    </div>
  );
};

export default ProductReviewSection;
