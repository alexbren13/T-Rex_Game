This game is an adaptation of the famous Dinosaur jump game, created by Google.


Key Features:
1. Core Game Mechanics
- Jump mechanics with spacebar or up arrow
- Progressive difficulty (speed increases over time)
- Collision detection
- Score system (1 point per 10 frames)
- Ground scrolling effect

2. Character System
- 15 Unlockable Characters with different point requirements:
    T-Rex (Default - 0 points)
    Mario (100 points)
    Luigi (200 points)
    Sonic (500 points)
    Link (750 points)
    Pikachu (1000 points)
    Kirby (1500 points)
    Yoshi (2000 points)
    Bowser (2500 points)
    Peach (3000 points)
    Donkey Kong (3500 points)
    Samus (4000 points)
    Mega Man (5000 points)
    Pac-Man (6000 points)
    Master Chief (7500 points)

3. Menu System
- Main menu with Play and Select Character options
- Character selection screen showing locked/unlocked status
- Game over screen with score display

4. Persistence
- Saves total cumulative score using localStorage
- Remembers selected character
- Tracks unlocked characters

5. Visual Style
- 8-bit pixel art style maintained
- Simple geometric representations of characters
- Pixelated rendering for authentic retro feel

How to Play:
1. Save the file as an HTML file (e.g., dino-game.html)
2. Open in any modern web browser - it works completely offline
3. Jump to avoid the obstacles! Have fun & enjoy :)

Controls:
Press Spacebar or Up Arrow to jump
Click/tap the canvas to jump on mobile


Unlock characters by accumulating points across multiple play sessions
Technical Implementation:
- Pure HTML5 Canvas - No external dependencies
- localStorage for persistent data
- Object-oriented design for obstacles and clouds
- Collision detection using bounding box method
- Responsive controls for both keyboard and touch

The game progressively gets harder as your speed increases, and each character has a unique 8-bit sprite design. The more you play, the more characters you unlock, encouraging replayability!