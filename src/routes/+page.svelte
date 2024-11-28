<svelte:head>
    <title>amber's abode</title>
    <meta name="description" content="amber's little internet home">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet" />
</svelte:head>

<h1>amber's abode</h1>
<section>
    <h2>what is this?</h2>
    <p><span class="blue">personal.</span> <span class="green">fun.</span> wacky. that's what the internet is all about. but honestly, it kinda just feels like a chore a lot of the time. i don't want that. this domain isn't going to be a chore, i want to enjoy working on it. i want it to be a reflection of me, what i can do and who i am.</p>
    <p>ANYWAY! welcome to my abode!!!</p>
</section>

<section>
    <h2>who am i?</h2>
    <p>oh, i never introduced myself! i'm sorry, that was rude of me. i'm amber and i'm a 17 y/o girl living in leicester, england. occasionally i make web pages (like this one), but i prefer to make apps for chat platforms like slack and discord, random python scripts, backends or desktop apps with tauri</p>
</section>

<section>
    <h2>what do i do?</h2>
    <p>uhhh, idk. i do stuff sometimes. i make random projects, random projects make me, i go to college, i read stuff, i play games?</p>
    <p>on a more serious note, i do lots of stuff (even though it often feels like i do nothing)! i use python as my main language but have been known to use rust and javascript too. i make slack apps, used to make discord bots, make games occasionally, sometimes weird websites or desktop apps and a bunch of other stuff. i just make whatever i feel like when i feel like it tbh</p>
    <p>i play games too ocasionally! my favourite is celeste, but i like some other random things like ys viii: lacrimosa of dana, animal crossing, stardew valley, ori and more</p>
    <h3>projects</h3>
    <p>here are some of the coolest projects i've made, go check em out if u want i guess</p>
    <section id="projects">
       <div class='project'>
            <img src="https://cloud-9cjmg0akv-hack-club-bot.vercel.app/0image.png" alt="isabelle">
            <h4><a href="https://github.com/hackclub/isabelle" target="_blank">isabelle</a> </h4>
            <p>
                bot that helps hack club members keep up to date with the current events in slack
            </p>
        </div> 
        <div class="project">
            <img src="https://cloud-pr38yr5oa-hack-club-bot.vercel.app/0image.png" alt="mail tale">
            <h4><a href="https://github.com/transcental/mailtale" target="_blank">mail tale</a></h4>
            <p>
                slack bot managing physical mail subscriptions for a newsletter 
            </p>
        </div>
        <div class="project">
            <img src="https://cloud-qdnxg3677-hack-club-bot.vercel.app/0image.png" alt="isabelle">
            <h4><a href="https://github.com/hackclub/boatswain" target="_blank">boatswain</a></h4>
            <p>
                support bot for <a href="https://ahoy.hack.club/1698" target="_blank">high seas</a> - makes it easier for us to humanely respond to more messages
            </p>
        </div>
        <div class="project">
            <img src="https://cloud-l61uss1ry-hack-club-bot.vercel.app/0emojigram.png" alt="emojigram">
            <h4><a href="https://emojigram.transcental.dev" target="_blank">emojigram</a></h4>
            <p>
                a new take on cryptograms - emojigrams are cryptograms but with emojis!
            </p>
        </div>
    </section>
</section>

<style>
:root {
    background-color: pink;
    font-family: 'Comic Neue', sans-serif;
}

h1 {
    font-size: 3em;
    text-align: center;
}

section {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

section * {
    max-width: 500px;
}

a {
    text-decoration: none;
}

.blue {
    color: blue;
}

.green {
    color: green;
}

section#projects {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
}

.project { 
    border: 3px solid lightskyblue;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 200px;
    background-color: wheat;
    height: 300px;
    justify-content: center;

    img {
        max-width: 150px;
        border-radius: 10px;
    }

    a {
        color: cadetblue;
    }

    h4, p {
        margin: 10px 0;
        max-width: 80%;
    }

    h4 {
        font-weight: bold;
    }

    
}
</style>