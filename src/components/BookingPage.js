export default function BookingPage() {
    return (
        <div className="booking-page">
            <h1>Reserve a Table</h1>
            <p>Book your table at Little Lemon and enjoy a great meal.</p>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <label>
                    Date:
                    <input type="date" name="date" required />
                </label>
                <label>
                    Time:
                    <input type="time" name="time" required />
                </label>
                <button type="submit">Book Now</button>
            </form>
        </div>
    );
}
