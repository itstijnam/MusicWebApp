        // Run this code when the HTML document is fully loaded
        document.addEventListener("DOMContentLoaded", function () {
    
            // Step 1: Create an object to store the IDs of the divs and their corresponding audio files
            const audioFiles = {
                "musicPlay1": "../musics/Teri-Yaad-Aditya-Rikhari.mp3",
                "musicPlay2": "../musics/AronChupa - Little Swing ft. Little Sis Nora _ OFFICIAL VIDEO.mp3",
                "musicPlay3": "../musics/Abba - Money, Money, Money (Official Music Video).mp3",
                "musicPlay4": "../musics/pyaar hota kai baar h.mp3",
                "musicPlay5": "../musics/satyanash.mp3",
                "musicPlay6": "../musics/REDZED - RAVE IN THE GRAVE (Official Video).mp3",
                "musicPlay7": "../musics/AronChupa, Little Sis Nora - Rave in the Grave.mp3",
                "musicPlay8": "../musics/Aditya Rikhari - SAMJHO NA ( NASAMAJH ).mp3",
                "musicPlay9": "../musics/NCR KE Lyrical Video _ DG IMMORTALS X Akaash Mukherjee _ NCR Days Web Series.mp3",
                "musicPlay10": "../musics/AronChupa, Little Sis Nora - Thai Massage.mp3",
                "musicPlay11": "../musics/OUALID & NOREL - DI MOCHKILA (PROD YAM & JANNO).mp3",
                "musicPlay12": "../musics/horn_blow.mp3",
                "musicPlay13": "../musics/Teri-Yaad-Aditya-Rikhari.mp3",
                "musicPlay14": "../musics/Bekarar_karke_hame.mp3",
                "musicPlay15": "../musics/horn_blow.mp3",
                "musicPlay16": "../musics/AronChupa, Little Sis Nora - I'm an Albatraoz _ OFFICIAL VIDEO.mp3",
                "musicPlay20": "stop.mp3",
            };
            let currentlyPlayingAudio = null;
    
            // Step 3: Loop through each key (ID of div) in the audioFiles object
            for (let id in audioFiles) {
    
                // Find the HTML element (div) using its ID
                let element = document.getElementById(id);
    
                // Create a new Audio object for the corresponding audio file
                let audio = new Audio(audioFiles[id]);
    
                // Step 4: Add an event listener to each element (div)
                // When the div is clicked, the function inside will run
                element.addEventListener("click", function () {
    
                    // Step 5: If there is an audio currently playing, pause it
                    if (currentlyPlayingAudio && currentlyPlayingAudio !== audio) {
                        currentlyPlayingAudio.pause();
                        currentlyPlayingAudio.currentTime = 0; // Reset the audio to the start
                    }
    
                    // Play the clicked audio
                    audio.play();
    
                    // Update currently playing audio to the new one
                    currentlyPlayingAudio = audio;
                });
            }
        });