import React from "react";
import "./home.css"
import Carousol from "./Carousol";
import GameCart from "./GameCart";

const HomeComp = () => {
    return (
        <>
            <div class="mx-auto top-nav" data-v-791b20d9>
                <div data-v-791b20d9>
                    <div data-v-791b20d9>
                        <section class="pt-5">
                            <div class="container">
                                <div id="example" class="home_banner_wrapper rounded-r-[6px] rounded-l-[6px] md:mt-0 md:rounded-none">
                                    <div class="block home_banner_and_category_wrapper">
                                        <div>
                                            <Carousol />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="container my-10" style={{padding: '0 !important'}}>
                            <div class="flex items-center mb-4 justify-between flex-wrap">
                                <h3 class="uppercase h_3">New Games</h3>
                                <GameCart />
                            </div>
                        </section>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeComp