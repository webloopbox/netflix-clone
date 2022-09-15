<h2 align="center">
  Netflix Clone
</h2>

<h2 align="center">
<img src="https://user-images.githubusercontent.com/60100557/187306168-0ea80139-f7b1-44d5-8768-7f653f63a38d.jpg" width="700" />
</h2>

## 🚀 Getting Started
```bash
git clone https://github.com/webloopbox/netflix-clone.git
cd netflix-clone
npm install
```

Go to `firebase.ts` file and place your own Firebase API key:

```
const firebaseConfig = {
    apiKey: [YOUR_VALUE],
    authDomain: [YOUR_VALUE],
    projectId: [YOUR_VALUE],
    storageBucket: [YOUR_VALUE],
    messagingSenderId: [YOUR_VALUE],
    appId: [YOUR_VALUE]
};
```

#### Then place your own TMDB API key inside `api/genres/index.ts` and `api/movies/index.ts`.

#### To start the application use:
```bash
npm install
npm start
```
---
## Built with
* React
* Typescript
* Redux Toolkit
* Redux-Saga
* Firebase
* MUI
* Formik

---

## License

- Full credit for API data to TMDB API.
