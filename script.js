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
    
    <!-- ========== JAVASCRIPT SECTION STARTS HERE ========== -->
    <!-- JavaScript adds INTERACTIVITY and BEHAVIOR to the webpage -->
    <script>
        // ========== EPISODE DATA ========== 
        // Array containing all episode titles and links
        // Index corresponds to episode number (episodes[142] = Episode 142)
        const episodes = [
            "Episode 000: Welcome to the Show",
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #001 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #002 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #003 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #004 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #005 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #006 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #007 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #008 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #009 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #010 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #011 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #012 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #013 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #014 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #015 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #016 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #017 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #018 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #019 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #020 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #021 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #022 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #023 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #024 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #025 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #026 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #027 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #028 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #029 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #030 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #031 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #032 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #033 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #034 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #035 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #036 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #037 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #038 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #039 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #040 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #041 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #042 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #043 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #044 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #045 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #046 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #047 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #048 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #049 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #050 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #051 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #052 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #053 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #054 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #055 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #056 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #057 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #058 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #059 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #060 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #061 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #062 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #063 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #064 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #065 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #066 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #067 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #068 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #069 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #070 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #071 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #072 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #073 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #074 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #075 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #076 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #077 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #078 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #079 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #080 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #081 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #082 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #083 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #084 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #085 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #086 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #087 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #088 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #089 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #090 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #091 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #092 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #093 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #094 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #095 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #096 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #097 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #098 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #099 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #100 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #101 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #102 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #103 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #104 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #105 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #106 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #107 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #108 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #109 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #110 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #111 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #112 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #113 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #114 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #115 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #116 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #117 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #118 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b5c6b4b8">Introducing the Show | <3 #119 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/9a5823e5">Storyteller Grok Comes Up With Image Prompts For Meta | <3 #120 GROK</a>',
            '<a href="https://share.transistor.fm/s/2408ac25">Character Development: Father of 2 Falling Prey to a Sinister Plot | <3 #121 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/7f9683d2">Building an Unsettling Opening Scene | <3 #122 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/5183d809">Chat Takes Us Back to the Time of the Incans | <3 #123 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/1d4fad9e">Grok is Not Good at Impressions | <3 #124 GROK</a>',
            '<a href="https://share.transistor.fm/s/2c390f72">We Lay The Foundation for a Sinister Plot | <3 #125 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/dac49928">We Step Into The Shoes of Wild Animals | <3 #126 GROK</a>',
            '<a href="https://share.transistor.fm/s/92892dab">Tackling the Case of Austin\'s Rainey St. Ripper | <3 #127 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/6854886f">Skip this Episode | <3 #128 GEMINI</a>',
            '<a href="https://share.transistor.fm/s/bde2c64b">Using Drones, Cameras, & AI to Surveil a Large Area on a Budget | <3 #129 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/b19355f7">When Conscription Becomes Forced Labor | <3 #130 COPILOT/GEMINI</a>',
            '<a href="https://share.transistor.fm/s/4a41f6f7">The Capabilities of Carol\'s AI-Powered, Real-Time Intelligence Gathering School Bus | <3 #131 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/af8f8ee0">Sorting out Perspectives Within Our Fiction Story | <3 #132 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/63353538">The Evolution of Skyscrapers & How We  Build Them | <3 #133 GEMINI</a>',
            '<a href="https://share.transistor.fm/s/081adb76">2 House Cats Talk Mad Shit on a Zoom Interviewer | <3 #134 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/7b36a6e3">Traveling Back to The Great Chicago Fire of 1871 | <3 #135 GEMINI</a>',
            '<a href="https://share.transistor.fm/s/ca9cee98">3 Act Structure & The Piccolo | <3 #136 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/4c62f5f6">In the Chernobyl Control Room | <3 #137 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/6b82ed7c">The State of the Sub-$2K 3D Printing Market & Bambu\'s Entire Line | <3 #138 GEMINI</a>',
            '<a href="https://share.transistor.fm/s/4ae63155">What is Vibe Coding & How Bolt.new Works | <3 #139 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/2e23a198">Gemini Helps Out Copilot, As We Tackle Virtual Private Servers | <3 #140 COPILOT, GEMINI</a>',
            '<a href="https://share.transistor.fm/s/5ac8dd3d">We Design a Digital Space(ship) that Defies the Laws of Physics | <3 #141 CHATGPT</a>',
            '<a href="https://share.transistor.fm/s/cb0e37a4">How to Disable a Nuclear Plant with a Flash Drive | <3 #142 GEMINI</a>',
            "", // Episode 143 not in export data
            "", // Episode 144 not in export data
            "", // Episode 145 not in export data
            "", // Episode 146 not in export data
            ""  // Episode 147 not in export data
        ];
        
        // ========== DIAL LOGIC ========== 
        // Array to store the current numbers on each dial
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