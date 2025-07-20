<!DOCTYPE html>
<html lang="en">
<!-- ========== HTML SECTION STARTS HERE ========== -->
<!-- HTML defines the STRUCTURE and CONTENT of the webpage -->
<head>
    <!-- Basic HTML document setup -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Dial</title>
    
    <!-- ========== LINK TO EXTERNAL CSS FILE ========== -->
    <!-- This tells the browser to load styles from a separate CSS file -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Episode display area - shows current episode title/link -->
    <div class="episode" id="episode">Episode 000: Welcome to the Show</div>
    
    <!-- Container for the three number dials -->
    <div class="dials" id="dials"></div>
        // Example: [1, 4, 2] = Episode 142
        let numbers = [0, 0, 0];
        
        // Create the three dials dynamically and insert them into the HTML
        document.getElementById('dials').innerHTML = numbers.map((n, i) => 
            `<div class="dial" 
                  onclick="spin(${i})" 
                  ontouchstart="handleTouchStart(event, ${i})" 
                  ontouchend="handleTouchEnd(event)">${n}</div>`
        ).join('');
        
        // Function to increase a dial's number (0-9, wraps around)
        function spin(i) {
            numbers[i] = (numbers[i] + 1) % 10; // Increment and wrap at 10
            update();
        }
        
        // Function to decrease a dial's number (0-9, wraps around)
        function spinDown(i) {
            numbers[i] = (numbers[i] - 1 + 10) % 10; // Decrement and wrap at 0
            update();
        }
        
        // Touch gesture handling variables
        let touchStartY = 0;
        let currentDial = -1; // Which dial is being touched
        
        // Handle start of touch gesture
        function handleTouchStart(e, dialIndex) {
            touchStartY = e.touches[0].clientY; // Record starting Y position
            currentDial = dialIndex;
            e.preventDefault(); // Prevent default touch behavior
        }
        
        // Handle end of touch gesture - determine swipe direction
        function handleTouchEnd(e) {
            if (currentDial === -1) return; // No dial being touched
            
            const touchEndY = e.changedTouches[0].clientY; // End Y position
            const deltaY = touchStartY - touchEndY; // Calculate swipe distance
            const threshold = 30; // Minimum distance for a flick
            
            // Determine swipe direction and update dial accordingly
            if (Math.abs(deltaY) > threshold) {
                if (deltaY > 0) {
                    // Flicked up - increase number
                    spin(currentDial);
                } else {
                    // Flicked down - decrease number
                    spinDown(currentDial);
                }
            } else {
                // Small movement or tap - just increase (original behavior)
                spin(currentDial);
            }
            
            currentDial = -1; // Reset touch state
            e.preventDefault();
        }
        
        // Update the display when dials change
        function update() {
            // Update the visual display of each dial
            const dialElements = document.querySelectorAll('.dial');
            dialElements.forEach((dial, i) => {
                dial.textContent = numbers[i];
            });
            
            // Calculate episode number from the three dials
            // hundreds*100 + tens*10 + ones = episode number
            const episodeNum = numbers[0] * 100 + numbers[1] * 10 + numbers[2];
            
            // Display the episode title/link or "not available" message
            document.getElementById('episode').innerHTML = episodes[episodeNum] || "Episode not available";
        }
        
        // Initialize the display
        update();
    </script>
    <!-- ========== JAVASCRIPT SECTION ENDS HERE ========== -->
</body>
<!-- ========== HTML SECTION ENDS HERE ========== -->
</html>