import React from "react";
import { ThemeProvider, Box } from "@mui/system";
import theme from "./theme";
import facebook_icon from "./images/facebook_icon.png";
import spond_icon from "./images/spond_icon.png";

function Vahloween(props) {
    const iconStyle = {
        width: 36,
        height: 36,
        objectFit: "contain",
        marginRight: 8,
    };

    const eventInfo = [
        {
            label: "Where",
            value: "Vahl Flerbrukshall, Oslo",
            href: "https://maps.app.goo.gl/NtHZ9qDwYh2xFpKw9",
        },
        { label: "When", value: "31. October 2026, 13:30-18:00" },
        { label: "Signups", value: "Open Oct. 12th -> Oct. 28th" },
        { label: "Bring", value: "Indoor shoes, water bottle, and costume (or dark and light but please costume!)" },
        { label: "Hosted by", value: "Furuset Brickers" },
    ];

    const highlights = [
        "Join us for Halloween Hat Tournament!🥏",
        "No team needed - just sign up, show up and play!😉",
        "No experience necessary - players of all skill levels are welcome.💪",
        "👻 Costumes are highly encouraged!",
        "There will be a small prize for the best costume 🏆🎃",
    ];

    const faqs = [
        {
            question: "What is a hat tournament?",
            answer: "A hat tournament is a tournament where the teams are randomly assigned from the attending players. Names are drawn from a hat to create teams, which means you can play with new people and make new friends!",
        },
        {
            question: "Can I shower at the hall?",
            answer: "Yes, there are wardrobes available at the hall.",
        },
        {
            question: "Can beginners play?",
            answer: "Absolutely. Players of all levels are welcome.",
        },
        {
            question: "What do I win if I win the costume contest?",
            answer: "A special prize, to be determined by the organizers.",
        },
        {
            question: "Will there be an afterparty?",
            answer: "Yes, there will be an afterparty! Details will be announced closer to the event.",
        },
    ];

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ bgcolor: "background.white", color: "text.primary" }}>
                <Box
                    className="main"
                    sx={{
                        mx: { xs: 2, sm: 4, md: 5 },
                        pt: 4,
                        pb: 6,
                    }}
                >
                    <Box
                        sx={{
                            p: { xs: 2, sm: 3 },
                            borderRadius: 3,
                            background:
                                "linear-gradient(120deg, rgba(255,140,66,0.18) 0%, rgba(255,190,92,0.24) 100%)",
                            border: "1px solid rgba(102, 59, 24, 0.14)",
                            mb: 3,
                        }}
                    >
                        <h1 style={{ marginTop: 0, marginBottom: 8 }}>Vahl-oween</h1>
                        <p style={{ margin: 0 }}>Halloween hat tournament for all experience levels.</p>
                        <Box
                            sx={{
                                mt: 2,
                                display: "grid",
                                gap: 1.25,
                                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                            }}
                        >
                            {eventInfo.map((item) => (
                                <Box
                                    key={item.label}
                                    sx={{
                                        p: 1.5,
                                        borderRadius: 2,
                                        bgcolor: "rgba(255,255,255,0.72)",
                                        border: "1px solid rgba(102, 59, 24, 0.1)",
                                    }}
                                >
                                    <strong>{item.label}</strong>
                                    <Box sx={{ mt: 0.5 }}>
                                        {item.href ? (
                                            <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                                                {item.value}
                                            </a>
                                        ) : (
                                            item.value
                                        )}
                                    </Box>
                                </Box>
                            ))}
                        </Box>

                        <Box
                            sx={{
                                mt: 2,
                                p: 1.5,
                                borderRadius: 2,
                                bgcolor: "rgba(255,255,255,0.65)",
                                border: "1px solid rgba(102, 59, 24, 0.1)",
                            }}
                        >
                            {highlights.map((line) => (
                                <Box key={line} sx={{ py: 0.4 }}>
                                    {line}
                                </Box>
                            ))}
                        </Box>
                        <Box
                            className="links"
                            sx={{
                                display: "flex",
                                justifyContent: "start",
                                flexWrap: "wrap",
                                gap: 2,
                                mx: { xs: 2, sm: 4, md: 5 },
                                pb: 5,
                            }}
                        >
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.facebook.com/events/1069617655703926/"
                                style={{
                                    color: "inherit",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    textDecoration: "none",
                                }}
                            >
                                <img src={facebook_icon} style={iconStyle} alt="facebook icon" />
                                Facebook Event
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://spond.com/client/sponds/960F1BC741654C62982C4FD5C0EC90CB"
                                style={{
                                    color: "inherit",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    textDecoration: "none",
                                }}
                            >
                                <img src={spond_icon} style={iconStyle} alt="spond icon" />
                                Spond Event
                            </a>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            mt: 4,
                            p: { xs: 2, sm: 3 },
                            borderRadius: 3,
                            border: "1px solid rgba(102, 59, 24, 0.14)",
                            background: "rgba(255, 248, 240, 0.55)",
                        }}
                    >
                        <h2 style={{ marginTop: 0, marginBottom: 12 }}>FAQ</h2>
                        <Box sx={{ display: "grid", gap: 1.5 }}>
                            {faqs.map((item) => (
                                <Box
                                    key={item.question}
                                    sx={{
                                        p: 1.5,
                                        borderRadius: 2,
                                        bgcolor: "rgba(255,255,255,0.8)",
                                        border: "1px solid rgba(102, 59, 24, 0.1)",
                                    }}
                                >
                                    <Box sx={{ fontWeight: 700, mb: 0.5 }}>{item.question}</Box>
                                    <Box>{item.answer}</Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default Vahloween;


{/** https://docs.google.com/forms/d/e/1FAIpQLScQJmIpOW1eKK-8VPF3i5cmOCrXA6BEye4Hrs5FHaEuKg6ijw/viewform?usp=header */}
