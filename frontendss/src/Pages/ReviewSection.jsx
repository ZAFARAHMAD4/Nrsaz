import React, { useState, useEffect } from 'react';
import '../Css/ReviewSection.css'
function ReviewSection() {
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    comment: '',
  });
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    const res = await fetch('http://localhost:3000/api/reviews');
    const data = await res.json();
    setReviews(data);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await fetch('http://localhost:3000/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setFormData({ name: '', rating: 5, comment: '' });
      fetchReviews();
    } else {
      alert('Failed to submit review');
    }
  };

  return (
    <div className="review-container">
      <h2 className="review-heading">Write a Review</h2>

      <div className="review-field">
        <label htmlFor="name">Name</label>
        <input
          className="review-input"
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
        />
      </div>

      <div className="review-field">
        <label htmlFor="rating">Rating</label>
        <select
          className="review-select"
          id="rating"
          value={formData.rating}
          onChange={handleChange}
        >
          <option value={5}>★★★★★</option>
          <option value={4}>★★★★☆</option>
          <option value={3}>★★★☆☆</option>
          <option value={2}>★★☆☆☆</option>
          <option value={1}>★☆☆☆☆</option>
        </select>
      </div>

      <div className="review-field">
        <label htmlFor="comment">Review</label>
        <textarea
          className="review-textarea"
          id="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Write your review here..."
        />
      </div>

      <button className="review-submit-btn" onClick={handleSubmit}>
        Submit Review
      </button>

      <div className="review-list">
        <h3>What others are saying:</h3>
        {reviews.length === 0 ? (
          <p>No reviews yet.</p>
        ) : (
          reviews.map((review, i) => (
            <div className="review-item" key={i}>
              <strong>{review.name}</strong> -{' '}
              {Array(review.rating).fill('★').join('')}
              <p>{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ReviewSection;
