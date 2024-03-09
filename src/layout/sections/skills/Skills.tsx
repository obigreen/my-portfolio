import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./Skill";
import {Icon} from "../../../components/icon/Icon";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>skills</SectionTitle>
            <FlexWrapper align={'start'} justify={'space-between'}>
                <StyledVectors>
                    <Icon iconId={'skillsSvg'} width={"349"} height={"282"} wiewBox={"0 0 349 282"}/>
                </StyledVectors>
                <FlexWrapper wrap={'wrap'} justify={'end'}>
                    <Skill
                        title={'Languages'}
                        technologies={'TypeScript Lua Python JavaScript'}/>
                    <Skill
                        title={'Databases'}
                        technologies={'SQLite PostgreSQL Mongo'}/>
                    <Skill
                        title={'Tools'}
                        technologies={'VSCode Neovim Linux Figma XFCE Arch Git Font Awesome'}/>
                    <Skill
                        title={'Other'}
                        technologies={'HTML CSS EJS SCSS REST Jinja'}/>
                    <Skill
                        title={'Frameworks'}
                        technologies={'React Vue Disnake Discord.js Flask Express.js'}/>
                </FlexWrapper>
            </FlexWrapper>
        </StyledSkills>
    );
};


const StyledSkills = styled.section`

`
const StyledVectors = styled.section`
  width: 349px;
  height: 282px;
`