# Counter App

A simple, clean counter application built with HTML, CSS, and JavaScript.

Live Demo: https://ctr-code.github.io/part-two/

## Project Overview

This project is a beginner-friendly JavaScript practice app created as a team hackathon exercise. It lets users:

- Increase the counter
- Decrease the counter
- Reset the counter to zero

The app includes guard logic so the counter never goes below 0.

## Features

- Interactive counter display
- Increase button
- Decrease button with lower bound protection (minimum value is 0)
- Reset button to return counter to 0
- Responsive centered card layout

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES6)

## Project Structure

```text
part-two/
├── index.html
├── README.md
└── assets/
	├── css/
	│   └── style.css
	└── js/
		└── script.js
```

## How It Works

- The counter value is stored in a JavaScript variable: `count`
- Clicking `+ Increase` increments `count`
- Clicking `- Decrease` decrements only when `count > 0`
- Clicking `Reset` sets `count` back to `0`
- The displayed value is updated via `textContent`

## Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/ctr-code/part-two.git
   ```

2. Open the project folder.
3. Run `index.html` in your browser (double-click it or use a local server in VS Code).

## Team

- Marcel
- Amir
- Charles

## Future Improvements

- Add keyboard shortcuts for increment/decrement/reset
- Add animations for number change
- Add unit tests for counter logic
- Add accessibility improvements (ARIA labels and focus states)

## License

This project is for educational and practice purposes.
