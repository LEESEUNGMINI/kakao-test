import { query } from "express";

export const mainPage = (req,res) => res.render("main");
export const introducePage = (req, res) => res.render("introduce");
export const coursePage = (req,res) => res.render("course");
export const loginPage = (req,res) => res.render("login")
export const joinPage = (req,res) => res.render("join")
export const qrPage = (req,res) => res.render("qr")

// 1. REACT 
// 2. 카카오 API 지도 화면에 + 카카오 지도 JS파일 

// db => 쿼리 한번 날려오기 - 환경 변수 설정 

// course 코스안내 페이지

// qr

// 로그인 (+ 카카오 로그인)