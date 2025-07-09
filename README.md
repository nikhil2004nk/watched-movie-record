# 🎬 Watched Movie Record

A modern, responsive movie tracking application built with React. Search, rate, and keep track of movies you have watched, powered by the OMDb API.

Site is live at: [https://nikhil2004nk.github.io/watched-movie-record](https://nikhil2004nk.github.io/watched-movie-record)

---

## 🌟 Features

- **🔎 Movie Search**: Instantly search for movies using the OMDb API
- **🎥 Movie Details**: View detailed information about each movie
- **⭐ Star Rating**: Rate movies you have watched
- **📋 Watched List**: Maintain a personal list of watched movies with your ratings
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **⚡ Fast & Simple**: Lightweight, clean, and easy to use

---

## 🛠️ Technology Stack

- **React 19.1.0** - Modern React with hooks
- **JavaScript (ES6+)**
- **CSS**
- **OMDb API** - Movie data provider
- **GitHub Pages** - Free hosting and deployment

---

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nikhil2004nk/watched-movie-record.git
cd watched-movie-record
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

### Deploying to GitHub Pages

```bash
npm run deploy
```

---

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ErrorMessage.js # Error display
│   ├── Loader.js       # Loading spinner
│   ├── Main.js         # Main layout
│   ├── MovieDetails.js # Movie details view
│   ├── MovieList.js    # Movie list view
│   ├── NavBar.js       # Navigation bar
│   ├── StarRating.js   # Star rating component
│   ├── WatchedMoviesList.js # Watched movies list
│   └── WatchedSummary.js    # Watched movies summary
├── hooks/              # Custom React hooks
│   ├── useKey.js
│   ├── useLocalStorageState.js
│   └── useMovies.js
├── index.js            # App entry point
├── index.css           # Global styles
└── App.js              # Main App component
```

---

## 🎨 Key Features Explained

### Movie Management
- **Search any movie** by title using the OMDb API
- **Detailed info**: See year, poster, plot, and more
- **Rate movies**: Assign your own star rating
- **Watched list**: Build your personal watched movies collection

### User Experience
- **Responsive design** for all devices
- **Instant feedback** with loading and error states
- **Persistent watched list** using local storage

---

## 🌐 Live Demo

Visit the live application: [Watched Movie Record](https://nikhil2004nk.github.io/watched-movie-record)

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Nikhil Kushwaha** - [GitHub Profile](https://github.com/nikhil2004nk)

---

⭐ If you find this project helpful, please give it a star!
