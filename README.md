# React User Carousel App

A **React application** that fetches user data from an external API and displays it as **responsive cards inside a carousel slider** using **react-slick**. The project demonstrates API integration, component-based design, and third-party slider usage in React.

---

## 🚀 Features

* 📡 Fetches user data from an API (`dummyjson.com`)
* 🧩 Displays users as reusable **Card components**
* 🎞️ Carousel/Slider implementation using **react-slick**
* ⏩ Auto-play sliding animation
* 📱 Responsive slider (desktop, tablet, mobile)
* 🧼 Clean component-based architecture

---

## Preview
![ss](./image.png)

## 🛠️ Tech Stack

* **React** (Hooks: `useState`, `useEffect`)
* **Axios** – API requests
* **react-slick** – Carousel slider
* **slick-carousel** – Slider styles
* **Tailwind CSS** – Styling

---

## 📂 Project Structure

```
src/
│── components/
│   ├── Banner.jsx
│   ├── Card.jsx
│
│── App.jsx
│── index.js
│── index.css
```

---

## ⚙️ How the App Works

### 1. Data Fetching

User data is fetched from an external API when the app loads:

```js
const fetchData = async () => {
  const { data } = await axios.get("https://dummyjson.com/users");
  setUsers(data.users);
};
```

### 2. Slider Configuration

The carousel behavior is controlled using a `settings` object:

```js
const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
};
```

### 3. Rendering Cards Inside Slider

A **single Slider** is used, and all user cards are mapped inside it:

```jsx
<Slider {...settings}>
  {users.map((item) => (
    <div key={item.id}>
      <Card item={item} />
    </div>
  ))}
</Slider>
```

This ensures proper sliding behavior and optimal performance.

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd react-user-carousel
```

### 2. Install Dependencies

```bash
npm install
```

Required packages:

```bash
npm install axios react-slick slick-carousel
```

### 3. Import Slider Styles

Add these imports (usually in `App.jsx` or `index.js`):

```js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
```

### 4. Run the App

```bash
npm start
```

The app will run at:

```
http://localhost:3000
```

---

## 🎨 UI Highlights

* Banner section at the top
* Card-based user layout
* Smooth auto-sliding animation
* Responsive design across devices

---

## 🔮 Future Enhancements

* Add custom next/previous arrows
* User search & filtering
* Modal view for user details
* Skeleton loaders while fetching data
* Dark/Light theme toggle

---

## 🧠 Learning Outcomes

This project helps in understanding:

* API data fetching in React
* Third-party library integration
* Proper usage of carousel sliders
* Component reusability
* Responsive UI design

---

## 📄 License

This project is open-source and intended for learning and practice purposes.

---

## 👨‍💻 Author

Built as a **React practice project** focusing on real-world UI patterns and data handling.

