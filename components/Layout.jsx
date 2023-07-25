import { GlobalCtx } from "@/pages/_app";
import { Box, Button, Flex, transform, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useCallback, useContext, useEffect, useState } from "react";

export default function Layout({ children }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [ws, setWs] = useState({ w: 0, h: 0 });
  const [pos, setPos] = useState({ x: `15%`, y: `50%` });
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const { dragging, setDragging } = useContext(GlobalCtx);
  const [dtMenuSize, setDtMenuSize] = useState({ w: 300, h: 400 });

  const bg = useColorModeValue("blackAlpha.100", "blackAlpha.700");
  const bar = useColorModeValue("whiteAlpha.800", "whiteAlpha.300");

  useEffect(() => {
    function resize() {
      setWs({ w: window.innerWidth, h: window.innerHeight });
    }
    window.addEventListener("resize", resize);
    resize();

    return () => window.removeEventListener("resize", resize);
  }, []);

  const msDown = useCallback((e) => {
    e.preventDefault();
    const rect = e.target.getBoundingClientRect();
    const event = e.touches ? e.touches[0] : e;
    setMouseOffset({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    setDragging(true);
  }, []);

  const msUp = useCallback((e) => {
    setDragging(false);
  }, []);

  const msMove = useCallback(
    (e) => {
      if (dragging) {
        const target = e.touches ? e.touches[0] : e;

        let fx = target.clientX - mouseOffset.x + dtMenuSize.w / 2;
        if (fx <= dtMenuSize.w / 2) fx = dtMenuSize.w / 2;
        if (fx >= ws.w - dtMenuSize.w / 2) fx = ws.w - dtMenuSize.w / 2;

        let fy = target.clientY - mouseOffset.y + dtMenuSize.h / 2;
        if (fy <= dtMenuSize.h / 2) fy = 0 + dtMenuSize.h / 2;
        if (fy >= ws.h - dtMenuSize.h / 2) fy = ws.h - dtMenuSize.h / 2;

        setPos({ x: `${fx}px`, y: `${fy}px` });
      }
    },
    [dragging]
  );

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", msMove);
      window.addEventListener("mouseup", msUp);
      window.addEventListener("touchmove", msMove);
      window.addEventListener("touchend", msUp);
    }

    return () => {
      window.removeEventListener("mousemove", msMove);
      window.removeEventListener("mouseup", msUp);
      window.removeEventListener("touchmove", msMove);
      window.removeEventListener("touchend", msUp);
    };
  }, [dragging]);

  let desktopMenu = {
    w: `${dtMenuSize.w}px`,
    h: `${dtMenuSize.h}px`,
    bg: `${bg}`,
    pos: `fixed`,
    transform: `translate(-50%, -50%)`,
    zIndex: 10,
    boxShadow: `md`,
    borderRadius: `xl`,
    overflow: `hidden`,
  };

  return (
    <>
      <header>
        <Box sx={desktopMenu} top={pos.y} left={pos.x} pointerEvents={dragging ? `unset` : `auto`}>
          <Box w={`100%`} h={`40px`} bg={bar} onMouseDown={msDown} onTouchStart={msDown}></Box>
          <Flex justifyContent={`center`} alignItems={`center`} h={`calc(100% - 40px)`}>
            <Button onClick={toggleColorMode}>Switch</Button>
          </Flex>
        </Box>
      </header>
      <main>{children}</main>
    </>
  );
}
