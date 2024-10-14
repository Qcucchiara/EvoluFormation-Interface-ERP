import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ContextTemplateEntity } from "@/context/contextTemplateEntity";
import { handleComment } from "@/services/EvoluFormationAPI/handleComment";
import { capitalizeFirstLetter } from "@/utils/miscellaneous";
import React, { useContext, useEffect, useState } from "react";

export const CommentsModule = (module_id: string) => {
  const { entityId } = useContext(ContextTemplateEntity);
  const [comments, setComments] = useState<any>();
  const [categories, setCategories] = useState<any>();

  const getUsedCategories = async (commentList: any) => {
    let ids: string[] = [];

    commentList.map((comment: any) => {
      if (!ids.includes(comment.category_id)) {
        ids.push(comment.category_id);
      }
    });

    return ids;
  };
  const getComments = async () => {
    const response = await handleComment.findAllFromEntity(module_id);
    setComments(response.data);
  };

  useEffect(() => {
    getComments();
  }, [module_id, entityId]);

  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        {categories.map((category: any) => {
          return (
            <TabsTrigger value={category.name}>
              {capitalizeFirstLetter(category.name.toLowerCase())}
            </TabsTrigger>
          );
        })}
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
};
